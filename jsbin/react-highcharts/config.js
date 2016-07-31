var config = {"lib":{"description":"qs.js.org quickstart template for React-highcharts","config":{"group":"Drawing/Charting Libraries","jsPreprocessor":"jsx"},"author":"Kirill Cherkashin","data":{"js":"var Hello = React.createClass({\n  render: function (){\n    return (\n      <h1>Hello {this.props.name}!</h1>\n    );\n  }\n});\n\nvar config = {\n  title: {\n    text: 'Hello, World!'\n  },\n  xAxis: {\n    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']\n  },\n  series: [{\n    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]\n  }]\n};\n\nReactDOM.render(\n  <ReactHighcharts config = {config}/>,\n  document.getElementById('container')\n);\n","html":"<!DOCTYPE html>\n<html>\n<head>\n\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react-dom.js\"></script>\n    <script src = \"https://cdnjs.cloudflare.com/ajax/libs/highcharts/4.2.5/highcharts.js\"></script>\n    <script src = \"https://cdnjs.cloudflare.com/ajax/libs/react-highcharts/9.0.0/ReactHighcharts.js\"></script>\n    <meta charset=\"utf-8\">\n    <title>React-highcharts started with qs.js.org</title>\n</head>\n<body>\n<div id=\"container\"></div>\n</body>\n</html>\n","css":""},"key":"react-highcharts"},"playground":{"key":"jsbin","label":"JsBin"}};