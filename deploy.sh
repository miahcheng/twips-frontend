sh build.sh

ssh root@137.184.179.159 << EOF

docker rm -f client

docker pull chengj29/capstonefrontend

docker run \
    -d \
    -e ADDR=:443 \
    -v /etc/letsencrypt:/etc/letsencrypt:ro \
    -e TLSCERT=/etc/letsencrypt/live/twipsbits.me/fullchain.pem \
    -e TLSKEY=/etc/letsencrypt/live/twipsbits.me/privkey.pem \
    -p 443:443 \
    -p 80:80 \
    --name client \
    chengj29/capstonefrontend
exit

EOF
