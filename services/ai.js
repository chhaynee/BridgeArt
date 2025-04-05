import axios from 'axios';

const STABLE_DIFFUSION_API_KEY = process.env.NEXT_PUBLIC_STABLE_DIFFUSION_API_KEY;
const IPFS_API_KEY = process.env.NEXT_PUBLIC_IPFS_API_KEY;

export const generateArtwork = async (prompt) => {
  try {
    // Generate image using Stable Diffusion
    const response = await axios.post(
      'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
      {
        text_prompts: [
          {
            text: prompt,
            weight: 1
          }
        ],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        samples: 1,
        steps: 30,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STABLE_DIFFUSION_API_KEY}`,
        },
      }
    );

    // Upload to IPFS
    const imageData = response.data.artifacts[0].base64;
    const ipfsResponse = await axios.post(
      'https://api.pinata.cloud/pinning/pinJSONToIPFS',
      {
        pinataContent: {
          image: imageData,
          name: prompt,
          description: `AI-generated artwork: ${prompt}`,
        },
        pinataOptions: {
          cidVersion: 0
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'pinata_api_key': IPFS_API_KEY,
        },
      }
    );

    return {
      imageUrl: `https://gateway.pinata.cloud/ipfs/${ipfsResponse.data.IpfsHash}`,
      metadata: {
        prompt,
        ipfsHash: ipfsResponse.data.IpfsHash,
      }
    };
  } catch (error) {
    console.error('Error generating artwork:', error);
    throw error;
  }
}; 