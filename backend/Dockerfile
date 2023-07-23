FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y \
    git \
    cmake \
    g++ \
    libssl-dev \
    libboost-all-dev

WORKDIR /usr/src/app
RUN git clone https://github.com/oatpp/oatpp.git
RUN cd oatpp \
    && mkdir build \
    && cd build \
    && cmake .. \
    && make \
    && make install

WORKDIR /usr/src/app
COPY . .
RUN mkdir build && \
    cd build && \
    cmake .. && \
    make

EXPOSE 8000
CMD ["./build/my-project-exe"]
