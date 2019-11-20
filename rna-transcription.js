

const rna = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
}  


export const toRna = dnaStrand => {
  if (dnaStrand === "") {return ""};
  let dna = "";
  for (let nucleotide of dnaStrand) {
    dna += rna[nucleotide]
  };
  return dna;
};



