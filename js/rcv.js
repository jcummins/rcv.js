/*
	Array of candidates
 */
candidates = [
	"Albert",
	"Betty",
	"Carl",
	"Derek",
	"Eric",
	"Frank",
	"Write ins"
];

/* 
	Array holding actual voters and their choices
	Using objects allows us to add iterators and properties to each voter
*/
voters = [
	{
		"choices" : [
			"Albert",
			"Betty",
			"Frank"
		]
	},
	{
		"choices" : [
			"Betty",
			"Albert",
			"Derek"
		]
	},
	{
		"choices" : [	
			"Albert",
			"Betty",
			"Eric"
		]
	},
	{
		"choices" : [
			"Eric",
			"Carl",
			""
		]
	}
];

/*
	Alias the input arrays for simplicity
*/

v = voters; // Voters
c = candidates; // Candidates
b = {}; // Buckets
r=0; // Start with round 0
/* Loop through the candidates and add initial properties */
for(var i=0;i<c.length;i++) {
	b[c[i]] = {};
	b[c[i]]['voters'] = [];
}

/* Loop through the voters */
for(var i=0;i<v.length;i++) {

	/* Set initial properties on voter */
	if(r==0) {
		v[i]['_exhausted'] = false;
		v[i]['_iterator'] = 0; 
	}

	/* Put the voter in a bucket based on their current iterator */
	if(v[i]['choices'][v[i]['_iterator']])
	{
		b[v[i]['choices'][v[i]['_iterator']]]['voters'].push(v[i]);
	}
 	
}

console.log(b);

/*
	TODO:

	In each round, we accept a tally the voters:
		Loop through each voter that does not have exhausted set to true
		and put them in a candidate bucket based on: choices[_current] which should
		hold their current candidate.

		Get the "_current" attribute of each 

		If they have no one in their "first" attribute, set their ""
	In a given round we do these steps:

	Loop through the votes, 

*/
