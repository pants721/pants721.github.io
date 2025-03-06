+++
title = 'Skely'
summary = "A simple command line tool for using and managing skeleton (template) projects, written in rust." 
weight = 2
[params]
    url = "https://github.com/pants721/skely"
+++

My programmming upbringing was primarily in rust, which has this great tool 
called cargo. Cargo handles dependencies, compilation, testing, and pretty much
everything else you could ask for. When I started to learn C, the feature of 
cargo that I missed the most was the ease of initializing a new project by 
calling `cargo new`. Whenever I would create a new C project, I had to do like
30 minutes of research to figure out how to _properly_ create a project using
whatever build tool I heard was good. For someone who doesn't actually know how
to write a makefile from scratch, figuring it out is pretty tedious. I wanted
to write a good, general-use makefile _one_ time and be able to reuse that for
all my projects. To do this, I wrote Skely. Skely takes a pre-configured 
template project, copies it to your new project's path, and replaces a 
placeholder string with your project's name in all files. It's a pretty useful 
tool that I still use for my C projects to this day.
