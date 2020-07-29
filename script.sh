#!/bin/bash

# example pushover notification
# MSG=$(printf "<font color=\"#408062\">%s</font>" "$@")
# curl -s -X POST \
#     --data-urlencode "token=<api token>" \
#     --data-urlencode "user=<user token>" \
#     --data-urlencode "sound=pushover" \
#     --data-urlencode "priority=0" \
#     --data-urlencode "html=1" \
#     --data-urlencode "title=Hello" \
#     --data-urlencode "message=$MSG" \
#     https://api.pushover.net/1/messages.json

echo "$@"
