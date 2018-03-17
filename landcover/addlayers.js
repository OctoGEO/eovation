const fs = require('fs');

const jsons = [
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-1992-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-1993-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-1994-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-1995-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-1996-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-1997-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-1998-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-1999-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2000-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2001-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2002-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2003-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2004-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2005-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2006-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2007-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2008-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2009-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2010-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2011-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2012-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2013-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2014-v2.0.7.tif.vrt.json',
    'https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-2015-v2.0.7.tif.vrt.json',
];

const style = JSON.parse(fs.readFileSync('style.satellite.json'));

let year = 1993;

while(year < 2016) {
    style.sources["landcover"+year] = {
      "tileSize": 256,
      "type": "raster",
      "url": `https://tiles.octogeo.com/ESACCI-LC-L4-LCCS-Map-300m-P1Y-${year}-v2.0.7.tif.vrt.json`
    }
    style.layers.splice(year-1993+4, 0, {
      "filter": [
        "all"
      ],
      "id": `landcover${year}`,
      "layout": {
        "visibility": "visible"
      },
      "maxzoom": 22,
      "minzoom": 0,
      "paint": {
        "raster-opacity": 0.001
      },
      "source": `landcover${year}`,
      "type": "raster"
    });

    year += 1;
}

fs.writeFileSync('style.all-satellite.json', JSON.stringify(style, null, 2));


var years = [];
year = 1992;
while(year < 2016) {
    years.push({
        id: 'landcover'+year,
        title: `ESA Landcover ${year}`
    });
    year++;
}
console.log(years);