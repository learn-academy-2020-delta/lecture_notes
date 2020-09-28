-- Postgres 9/28/2020

code, name, continent, region, surfacearea, indepyear, population, lifeexpectancy, gnp, gnpold, localname, governmentform, headofstate, capital, code2

SELECT * FROM country;

SELECT code, name, surfacearea FROM country WHERE name = 'Mexico';

SELECT code, name, population FROM country WHERE population < 1000000;


SELECT code, country, governmentform FROM country WHERE governmentform LIKE '%epublic' LIMIT 10;

SELECT code, country, governmentform, population FROM country WHERE governmentform LIKE '%epublic' ORDER BY population LIMIT 10;

SELECT code, country, governmentform, population FROM country WHERE governmentform LIKE '%epublic' ORDER BY population DESC LIMIT 10;


SELECT code, name, surfacearea, population, population / surfacearea AS density
FROM country
ORDER BY density;

WITH populated_countries AS (
	SELECT name, population, gnp
	FROM country
	WHERE population > 0
	AND gnp > 0
	)
SELECT name
FROM populated_countries
ORDER BY population
LIMIT 10;

SELECT region, SUM(surfacearea)
FROM country
GROUP BY region;
