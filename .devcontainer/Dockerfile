ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

ARG USERNAME

ENV PROMPT_COMMAND="history -a"
ENV HISTFILE=/commandhistory/.bash_history

RUN \
  mkdir /commandhistory && \
  touch /commandhistory/.bash_history
# chown -R $USERNAME /commandhistory

RUN \
  # mkdir -p /home/$USERNAME/.vscode-server/extensions && \
  mkdir -p /root/.pnpm-store
# chown -R $USERNAME /home/$USERNAME/.vscode-server /home/$USERNAME/.pnpm-store

USER $USERNAME

RUN \
    npm install -g @antfu/ni pnpm && \
  pnpm config set store-dir /root/.pnpm-store
