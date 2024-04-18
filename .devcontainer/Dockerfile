ARG HUGO_VERSION=latest
FROM ghcr.io/peaceiris/hugo:${HUGO_VERSION}

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && mkdir -p /etc/sudoers.d \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Configure bash prompt
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get install -y bash-completion \
    && rm -rf /var/lib/apt/lists/* \
    && hugo completion bash > /etc/bash_completion.d/hugo

USER $USERNAME