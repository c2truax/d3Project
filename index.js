// $(window).on("load", function() {
//   $("#mapid").height($(window).height()).width($(window).width());
// }).trigger("resize");
var data = {name:"home",children:[
  {name:"FLORAL",children:[
    {name:"BLACK TEA",size:1},
    {name:" FLORAL",children:[
      {name:"CHAMOMILE",size:1},
      {name:"ROSE",size:1},
      {name:"JASMINE",size:1}]}]},
  {name:"FRUITY",children:[
    {name:"BERRY",children:[
      {name:"BLACKBERRY",size:1},
      {name:"RASPBERRY",size:1},
      {name:"BLUEBERRY",size:1},
      {name:"STRAWBERRY",size:1}]},
    {name:"DRIED FRUIT",children:[
      {name:"RAISIN",size:1},
      {name:"PRUNE",size:1}]},
    {name:"OTHER FRUIT",children:[
      {name:"COCONUT",size:1},
      {name:"CHERRY",size:1},
      {name:"POMEGRANATE",size:1},
      {name:"PINEAPPLE",size:1},
      {name:"GRAPE",size:1},
      {name:"APPLE",size:1},
      {name:"PEACH",size:1},
      {name:"PEAR",size:1}]},
    {name:"CITRUS FRUIT",children:[
      {name:"GRAPEFRUIT",size:1},
      {name:"ORANGE",size:1},
      {name:"LEMON",size:1},
      {name:"LIME",size:1}]}]},
  {name:"SOUR/ FERMENTED",children:[
    {name:"SOUR",children:[
      {name:"SOUR AROMATICS",size:1},
      {name:"ACETIC ACID",size:1},
      {name:"BUTYRIC ACID",size:1},
      {name:"ISOVALERIC ACID",size:1},
      {name:"CITRIC ACID",size:1},
      {name:"MALIC ACID",size:1}]},
    {name:"ALCOHOL/FERMENTED",children:[
      {name:"WINEY",size:1},
      {name:"WHISKEY",size:1},
      {name:"FERMENTED",size:1},
      {name:"OVERRIPE",size:1}]}]},
  {name:"GREEN/VEGETATIVE",children:[
    {name:"OLIVE OIL",size:1},
    {name:"RAW",size:1},
    {name:" GREEN/VEGETATIVE",children:[
      {name:"UNDER-RIPE",size:1},
      {name:"PEAPOD",size:1},
      {name:"FRESH",size:1},
      {name:"DARK GREEN",size:1},
      {name:"VEGITATIVE",size:1},
      {name:"HAY-LIKE",size:1},
      {name:"HERB-LIKE",size:1}]},
    {name:"BEANY",size:1}]},
  {name:"OTHER",children:[
    {name:"PAPERY/MUSTY",children:[
      {name:"STALE",size:1},
      {name:"CARDBOARD",size:1},
      {name:"PAPERY",size:1},
      {name:"WOODY",size:1},
      {name:"MOLDY/DAMP",size:1},
      {name:"MUSTY/DUSTY",size:1},
      {name:"MUSTY/EARTHY",size:1},
      {name:"ANIMALIC",size:1},
      {name:"MEATY BROTHY",size:1},
      {name:"PHENOLIC",size:1}]},
    {name:"CHEMICAL",children:[
      {name:"BITTER",size:1},
      {name:"SALTY",size:1},
      {name:"MEDICINAL",size:1},
      {name:"PETROLEUM",size:1},
      {name:"SKUNKY",size:1},
      {name:"RUBBER",size:1}]}]},
  {name:"ROASTED",children:[
    {name:"PIPE TOBACCO",size:1},
    {name:"TOBACCO",size:1},
    {name:"BURNT",children:[
      {name:"ACRID",size:1},
      {name:"ASHY",size:1},
      {name:"SMOKY",size:1},
      {name:"BROWN, ROAST",size:1}]},
    {name:"CEREAL",children:[
      {name:"GRAIN",size:1},
      {name:"MALT",size:1}]}]},
  {name:"SPICES",children:[
    {name:"PUNGENT",size:1},
    {name:"PEPPER",size:1},
    {name:"BROWN SPICE",children:[
      {name:"ANISE",size:1},
      {name:"NUTMEG",size:1},
      {name:"CINNAMON",size:1},
      {name:"CLOVE",size:1}]}]},
  {name:"NUTTY/COCOA",children:[
    {name:"NUTTY",children:[
      {name:"PEANUTS",size:1},
      {name:"HAZELNUT",size:1},
      {name:"ALMOND",size:1}]},
    {name:"COCOA",children:[
      {name:"CHOCOLATE",size:1},
      {name:"DARK CHOCOLATE",size:1}]}]},
  {name:"SWEET",children:[
    {name:"BROWN SUGAR",children:[
      {name:"MOLASSES",size:1},
      {name:"MAPLE SYRUP",size:1},
      {name:"CARAMELIZED",size:1},
      {name:"HONEY",size:1}]},
    {name:"VANILLA",size:1},
    {name:"VANILLIN",size:1},
    {name:"OVERALL SWEET",size:1},
    {name:"SWEET AROMATICS",size:1}]}]};

partition = data => {
  const root = d3.hierarchy(data)
      .sum(d => d.size)
      // .sort((a, b) => b.value - a.value);
  return d3.partition()
      .size([2 * Math.PI, root.height + 1])
    (root);
}

color = d3.scaleOrdinal().range([
  "rgb(216, 25, 106)",
  "rgb(215, 33, 43)",
  "rgb(234, 179, 45)",
  "rgb(31, 121, 51)",
  "rgb(29, 162, 180)",
  "rgb(198, 74, 54)",
  "rgb(171, 36, 64)",
  "rgb(167, 123, 102)", 
  "rgb(227, 89, 58)",
  //end of inner ring
  "rgb(150, 95, 109)",
  "rgb(222, 115, 156)",
  "rgb(219, 77, 84)",
  "rgb(199, 75, 72)",
  "rgb(239, 106, 81)",
  "rgb(245, 160, 57)",
  "rgb(224, 194, 49)",
  "rgb(175, 150, 60)",
  "rgb(162, 175, 54)",
  "rgb(113, 136, 57)",
  "rgb(63, 161, 88)",
  "rgb(96, 153, 129)",
  "rgb(158, 178, 183)",
  "rgb(121, 192, 202)",
  "rgb(201, 163, 105)",
  "rgb(222, 188, 130)",
  "rgb(189, 134, 102)",
  "rgb(220, 175, 103)",
  "rgb(120, 71, 82)",
  "rgb(201, 63, 69)",
  "rgb(175, 78, 88)",
  "rgb(198, 136, 108)",
  "rgb(186, 118, 79)",
  "rgb(209, 91, 92)",
  "rgb(246, 154, 131)",
  "rgb(241, 119, 119)",
  "rgb(228, 92, 106)",
  "rgb(205, 85, 97)",
  // end of next ring
  "rgb(246, 157, 49)",
  "rgb(237, 92, 122)",
  "rgb(247, 240, 191)",
  "rgb(61, 4, 23)",
  "rgb(227, 47, 106)",
  "rgb(101, 107, 174)",
  "rgb(235, 48, 60)",
  "rgb(179, 61, 85)",
  "rgb(163, 70, 111)",
  "rgb(206, 124, 62)",
  "rgb(229, 56, 84)",
  "rgb(228, 87, 89)",
  "rgb(246, 154, 49)",
  "rgb(174, 184, 58)",
  "rgb(82, 183, 77)",
  "rgb(244, 138, 97)",
  "rgb(185, 165, 63)",
  "rgb(240, 100, 89)",
  "rgb(223, 99, 43)",
  "rgb(252, 226, 52)",
  "rgb(127, 176, 65)",
  "rgb(158, 166, 42)",
  "rgb(148, 166, 114)",
  "rgb(207, 178, 86)",
  "rgb(143, 181, 77)",
  "rgb(249, 238, 54)",
  "rgb(193, 185, 40)",
  "rgb(141, 32, 83)",
  "rgb(177, 66, 60)",
  "rgb(185, 145, 58)",
  "rgb(138, 100, 60)",
  "rgb(162, 185, 56)",
  "rgb(100, 169, 67)",
  "rgb(25, 165, 86)",
  "rgb(19, 131, 75)",
  "rgb(50, 177, 80)",
  "rgb(163, 167, 59)",
  "rgb(124, 191, 74)",
  "rgb(139, 140, 144)",
  "rgb(190, 177, 121)",
  "rgb(254, 254, 244)",
  "rgb(115, 78, 15)",
  "rgb(163, 162, 114)",
  "rgb(200, 180, 134)",
  "rgb(151, 135, 75)",
  "rgb(157, 151, 128)",
  "rgb(202, 123, 108)",
  "rgb(217, 101, 108)",
  "rgb(129, 168, 157)",
  "rgb(223, 242, 252)",
  "rgb(123, 155, 173)",
  "rgb(26, 158, 182)",
  "rgb(95, 119, 123)",
  "rgb(18, 12, 12)",
  "rgb(184, 163, 80)",
  "rgb(137, 152, 147)",
  "rgb(160, 116, 64)",
  "rgb(136, 72, 25)",
  "rgb(182, 144, 113)",
  "rgb(228, 154, 98)",
  "rgb(198, 136, 62)",
  "rgb(138, 42, 46)",
  "rgb(226, 119, 56)",
  "rgb(160, 108, 92)",
  "rgb(211, 172, 44)",
  "rgb(156, 84, 55)", 
  "rgb(199, 159, 133)", 
  "rgb(104, 42, 28)",
  "rgb(70, 7, 6)", 
  "rgb(48, 13, 16)",
  "rgb(172, 53, 37)",
  "rgb(213, 135, 49)",
  "rgb(216, 93, 43)",
])

format = d3.format(",d")

width = 650

radius = width / 6

arc = d3.arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(radius * 1.5)
    .innerRadius(d => d.y0 * radius)
    .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))




const root = partition(data);

root.each(d => d.current = d);

const svg = d3.select('svg')
    .style("width", "100%")
    .style("height", "670px")
    .style("font", "10px sans-serif");

const g = svg.append("g")
    .attr("transform", `translate(${width / 2},${width / 2})`);

const path = g.append("g")
  .selectAll("path")
  .data(root.descendants().slice(1))
  .enter().append("path")
    .attr("fill", d => { return color(d.data.name); })
    .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 1.0 : 1.0) : 0)
    .attr("d", d => arc(d.current));

path.filter(d => d)
    .style("cursor", "pointer")
    .on("click", clicked);

path.append("title")
    .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

const label = g.append("g")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .style("user-select", "none")
  .selectAll("text")
  .data(root.descendants().slice(1))
  .enter().append("text")
    .attr("dy", "0.35em")
    .style("font", "9px sans-serif")
    .attr("fill", function(d) {
      if (d.data.name == "SALTY" || d.data.name == "PAPERY" || d.data.name == "JASMINE" || d.data.name == "CITRIC ACID" || d.data.name == "LEMON") {return "black"}
      else 	{ return "white" };})
    .attr("fill-opacity", d => +labelVisible(d.current))
    .attr("transform", d => labelTransform(d.current))
    .text(d => d.data.name);

const button = g.append("text")
    .attr("dx", function(d){return -20})
    .text('back')
    .style("font", "18px sans-serif")

const parent = g.append("circle")
    .datum(root)
    .attr("r", radius)
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .on("click", clicked);



function clicked(p) {
  console.log(p.data.name);
  parent.datum(p.parent || root);
  
  root.each(d => d.target = {
    x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
    x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
    y0: Math.max(0, d.y0 - p.depth),
    y1: Math.max(0, d.y1 - p.depth)
  });

  const t = g.transition().duration(1000);

  // Transition the data on all arcs, even the ones that aren’t visible,
  // so that if this transition is interrupted, entering arcs will start
  // the next transition from the desired position.
  path.transition(t)
      .tween("data", d => {
        const i = d3.interpolate(d.current, d.target);
        return t => d.current = i(t);
      })
    .filter(function(d) {
      return +this.getAttribute("fill-opacity") || arcVisible(d.target);
    })
      .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 1.0 : 1.0) : 0)
      .attrTween("d", d => () => arc(d.current));

  label.filter(function(d) {
      return +this.getAttribute("fill-opacity") || labelVisible(d.target);
    }).transition(t)
      .attr("fill-opacity", d => +labelVisible(d.target))
      .attrTween("transform", d => () => labelTransform(d.current));
}

function arcVisible(d) {
  return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
}

function labelVisible(d) {
  return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
}

function labelTransform(d) {
  const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
  const y = (d.y0 + d.y1) / 2 * radius;
  return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
}



