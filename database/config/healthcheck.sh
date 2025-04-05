#!/bin/sh
pg_isready -U user -d mydb || exit 1
