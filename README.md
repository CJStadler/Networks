Social Network Analysis Project
===============================

Based on a project for cs207 at Haverford College with Sorelle Friedler.
I am also currently working with a sociology professor on a paper using these tools, hopefully to be published.

THIS REPOSITORY DOES NOT CONTAIN THE COMPLETE PROJECT.
The dataset I am working with is not public and so has not been included.
I have also left out graph.js and regression.js because I did not write all of them. 

Contents:
- index.html
	- Menu to select network to visualize.
	- Force directed graph of social network.
		- Node radii correspond to PageRank.
		- Node colors correspond to income
	- Plot of PageRank vs. income
		- Regression line (although this may not always be statistically appropriate).

- pagerank.js
	-Implementation of PageRank algorithm in javascript. Requires Graph object.

- viz_example.png
	- A screenshot of the force directed graph for one network.