# Build Server / CI CD Pipeline

## prepair Network

In order for the services to communicate with each other, you need a network. This must be created outside the docker-compose files.

```bash
docker network create build
```

## Allow Webhooks

- for the webhooks to work the url must be adjusted and the webhook must be allowed in config

```toml
[webhook]
ALLOWED_HOST_LIST = youre.host.local
```
