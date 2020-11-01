document.addEventListener('DOMContentLoaded', function() {

  var container = document.querySelector('#graph');

  var data = {
    nodes: [
{
  id: 1,
  shape: 'image',
  image: 'memoji/kelci.png',
  label: 'kelci'
},
{
  id: 2,
  shape: 'image',
  image: 'memoji/madison.png',
  label: 'madison'
},
{
  id: 3,
  shape: 'image',
  image: 'memoji/khanh.png',
  label: 'khanh'
},
{
  id: 4,
  shape: 'image',
  image: 'memoji/anjelica.png',
  label: 'anjelica'
},
{
  id: 5,
  shape: 'image',
  image: 'memoji/gloria.png',
  label: 'gloria'
},
{
  id: 6,
  shape: 'image',
  image: 'memoji/shambhavi.png',
  label: 'shambhavi'
},
{
  id: 7,
  shape: 'image',
  image: 'memoji/sammi.png',
  label: 'sammi'
},
{
  id: 8,
  shape: 'image',
  image: 'memoji/afsana.png',
  label: 'afsana'
}
    ],
    edges: [
      //kelci - 1
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 1, to: 4},
      {from: 1, to: 5},
      {from: 1, to: 6},
      {from: 1, to: 7},
      {from: 1, to: 8},

      //madison - 2
      {from: 2, to: 6},
      {from: 2, to: 7},

      //khanh - 3
      {from: 3, to: 4},
      {from: 3, to: 5},

      //anjelica - 4
      {from: 4, to: 5},

      //shambhavi - 7
      {from: 6, to: 7},
      {from: 6, to: 8},

    ]
  }

  var options = {
    nodes: {
      borderWidth:0,
      size:42,
      color: {
        border: '#222',
        background: 'transparent'
      },
      font: {
        color: '#111',
        face: 'Noto Sans',
        size: 16,
        strokeWidth: 1,
        strokeColor: '#222'
      }
    },
    edges: {
      color: {
        color: '#CCC',
        highlight: '#C1CEFE'
      },
      width: 3,
      length: 275,
      hoverWidth: .05
    }
  }

  var network = new vis.Network(container, data, options);

});
