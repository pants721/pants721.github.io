+++
title = "CUBERT"
summary = "Software for the CUBERT flatsat."
weight = 1
[params]
    url = "https://github.com/pants721/cubert"
+++

Embedded Rust firmware for the STM32F446 microcontroller, built with RTIC. Periodically reads sensor data; runs according to a state machine; tracks and recovers from faults, handling state transitions accordingly; and downlinks telemetry over serial (for now) using COBS framing.

Also the ground station dashboard web server, written in Python. Displays telemetry from CUBERT through graphs, numbers, and status indicators.

CUBERT is a project I started in the summer of 2026 in order to enhance my understanding of low-level flight software.
