FROM node:latest

EXPOSE 8888

RUN mkdir -p /opt/app/
WORKDIR /opt/app/
COPY docker-entrypoint.sh /usr/bin/docker-entrypoint.sh
RUN chmod a+x /usr/bin/docker-entrypoint.sh

CMD ["docker-entrypoint.sh"]