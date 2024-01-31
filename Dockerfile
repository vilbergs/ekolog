FROM denoland/deno

WORKDIR /app

ADD . /app

RUN deno cache main.ts

CMD ["run", "--unstable-kv", "--allow-net", "--allow-env", "main.ts"]
