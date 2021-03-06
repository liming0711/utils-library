import {
  isNumberic,
  isNumbericInRange,
  decimal,
  add,
  sub,
  mcl,
  division,
  shuffle,
  randomColor
} from '../../src'
let a = 0.11111
let b = 0.25678
let c = '0.1'
let d = 'a1'
let e = 2.1
let f = 0.1
let g = 0.2
let h = 0.3

document.write(`${a}(number)是一个数字：${isNumberic(a)}<br />`)
document.write(`${a}(number)是一个数字（严格模式）：${isNumberic(a, true)}<br />`)
document.write(`${c}(string)是一个数字：${isNumberic(c)}<br />`)
document.write(`${c}(string)是一个数字（严格模式）：${isNumberic(c, true)}<br />`)
document.write(`${d}(string)是一个数字：${isNumberic(d)}<br />`)
document.write(`${a}(number)是一个介于[0, 100]之间的数字：${isNumbericInRange(a, 0, 100)}<br />`)
document.write(`${a}(number)是一个介于[1, 100]之间的数字：${isNumbericInRange(a, 1, 100)}<br />`)
document.write(`${b}(number)保留两位小数（四舍五入）：${decimal(b, 2)}<br />`)
document.write(`${b}(number)保留两位小数（舍去）：${decimal(b, 2, true)}<br />`)
document.write(`${e}(number)保留两位小数：${decimal(e, 2)}<br />`)
document.write(`使用add方法：${f} + ${g} = ${add(f, g)}，不使用方法：${f} + ${g} = ${f + g}<br />`)
document.write(`使用sub方法：${h} - ${f} = ${sub(h, f)}，不使用方法：${h} - ${f} = ${h - f}<br />`)
document.write(`使用mcl方法：${f} * ${g} = ${mcl(f, g)}，不使用方法：${f} * ${g} = ${f * g}<br />`)
document.write(
  `使用division方法：${h} / ${f} = ${division(h, f)}，不使用方法：${h} / ${f} = ${h / f}<br />`
)
document.write(`${[a, b, c, d, e, f, g, h]} 乱序：${shuffle([a, b, c, d, e, f, g, h])}`)
document.getElementById('test').innerHTML =
  '<div style="color:' + randomColor() + '">这是一个随机颜色</div>'
