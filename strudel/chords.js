setcpm(108 / 4)

let p1 = `
<~ Eb C [Ab Bb]>
[C7 Csus]
<[F7sus F7] [Bb7 F7]>
[~ C7]
`

let p2 = `
<~ Eb C [Ab Bb]>
<[C7 Csus] E7sus>
<<F#7sus F7 [F7sus F7] [Bb7 B7]> <[Bb7 F7] [G#m7 G7#9#5]>>
[~ C7]`

stack(
  stack(
    s("bd bd bd bd")
      .distort(0.2)
      .gain(1)
      //.gain(0)
      .color('blue'),
    s("~ <~ sd:1> ~ <sd:1 ~ sd:1 [~ ~ ~ sd:1]>")
      .gain(1)
      //.gain(0)
      .color('green'),
    s("[hh!2 hh!2]*4")
      .gain("[.5!2 .8!2]*4")
      //.gain(0)
      .color('red'),
  ),
  stack(
    chord(p2)
      .voicing()
      .sound("supersaw")
      .distort(3)
      .gain(0.05)
      .lpf(tri.range(200, 8000).slow(3))
      .color('fuchsia')
      .punchcard()
  ),
).punchcard()
