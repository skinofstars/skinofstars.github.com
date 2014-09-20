---
layout: post
title: Vagrant to Docker
categories:
- Machines
tags: [vagrant, docker]
status: publish
type: post
published: true
meta: {}
---
Despite some initial mis-givings, I really fell for Vagrant. Consistent repeatable develoment environments, what's not to love? Well, the mostly the lack of speed. There are tricks that help, like nfs, but a full VM is comparatively slow compared to running native. Also, though I try to keep things consistent, using provisioners like Ansible, there still seems to be some discrepencies between environments.

I've heard great things about Docker's speed. There are also several services now offering Docker based deploys. So as part of a blog revivial (that time of year again) I thought I'd give it a go.

There are already some great docs and articles out there on working with Docker.

If you wanna start using Docker, certainly read the [docker userguide](http://docs.docker.com/userguide/)

There is also this great article by Ron Dahlgren that gives [side by side comparison of Vagrant and Docker builds](http://dahlgren.so/software/2014/05/11/From-Vagrant-To-Docker/).

That said, I think there are some concepts that it's good to get your head around first, especially if you're expecting it to act like a drop-in for Vagrant.

## Docker containers aren't Virtual Machines
A VM is a totally independent system. An LXC (LinuXContainer) (for which Docker is just a wrapper) is an operating system level virtualisation, which means...

## It needs to run in Linux
It is using the base system libs where available - unlike a full blown VM. So if you're using a Mac, you'll need either boot2docker (a mini Linux VM) or a Vagrant style VM to run it in.

## Base systems are minimal
There are many community containers for various starting points. But if you just start with an ubuntu:14.04 container, it is really really minimal. Like, no python, build-essentials, nothing. You do have apt-get, so start building from there.

## Containers are just snapshots
Every step in a Dockerfile will create a new container from the last step. These intermediary containers get cached, which makes for super fast rebuilds. It also allows you to create a shared base system, or to start from someone else's snapshot if you like. There are loads on the [docker hub](https://registry.hub.docker.com/)

## Containers are just snapshots
Once a VM is up, it's up. You ssh in/out as you please. However, unless you deamonise `docker run` or keep reading from stdout, it will exit as soon as it's commands have run.

With VMs, you can also do things like auto-mounting network shares/magic sync stuff. In Docker, you need to mount your working dir to the image at runtime. You also need to use an absolute path.

```
# Example docker run with interactive tty and project folder mounted
sudo docker run -it -v /home/kevin/projects/app:/app my_container /bin/bash
```

That said, you can import a dir using `ADD`, but changes in the container wont reflect in your local filesystem, as ADD just copies the files over.

You could also just clone your repo straight in to the container if you want. Y'know, for building deploys or whatevs.

Ok, I'm just up to building dev workspaces at the moment. Making Dockerfiles currently feels a bit like provisioning with bash scripts. Not bad I guess, but I'd really like to hook it up with Ansible next so I can start provisioning containers like a boss.
