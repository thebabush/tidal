setcpm(120 / 4)

let BASS = 1
let PAD = 2
let DRUMZ = 3
let PIANOZ = 4

stack(
  note("[<Eb C Ab:4>]/2").midichan(BASS),
  stack(
    chord("<Cm7 EbM7 Gm7 EbM7>/2").voicing().transpose(12).layer(x=>x.transpose("<[0,12] 0>/4")),
  ).midichan(PAD),
  stack(
    note(stack(
      "[0 [0 0 | 0*2 -]@2 0]/2", // BD
      "[- - - 5]", // SD
      "[7 [2 | 2*2] [2 2 | 2*3 | 2*6]@2]*2",
    ).add(36)),
  ).midichan(DRUMZ),
  stack(
    //note("[<<Bb Eb F> G Ab G>]*2".add(12).late("[0 | 0.1]*2")),
    //note("[- Eb*2 [- [- C]]]*2".add(12)).clip(0.8),
  ).midichan(PIANOZ),
).midi('IAC Driver')
