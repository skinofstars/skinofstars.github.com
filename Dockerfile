
# sudo docker build -t="skinofstars:jekyll"

FROM ubuntu:14.04
MAINTAINER Kevin Carmody <kevin@skinofstars.com>

# for building native tools and extensions
RUN apt-get update && apt-get install -y curl build-essential

# for add-apt-repository
RUN apt-get update && apt-get -y install software-properties-common

# ruby and gems setup
RUN add-apt-repository ppa:brightbox/ruby-ng
RUN apt-get update && apt-get install -y ruby2.1 ruby2.1-dev
RUN gem install bundler

# nodejs
RUN add-apt-repository ppa:chris-lea/node.js
RUN apt-get update && apt-get install -y nodejs

# filesystem setup
RUN mkdir /app
ADD Gemfile /app/Gemfile
WORKDIR /app
RUN bundle install

# ADD . /app

RUN apt-get install -y python


# sudo docker run -it -v /home/kevin/projects/skinofstars.github.com:/app 95df651905ef /bin/bash
# sudo docker run -d -v /home/kevn/projects/skinofstars.github.com/:/app  skinofstars:jekyll

