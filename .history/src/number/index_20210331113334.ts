/**
 * 判断一个值是否是非16进制实数
 * @param value 需要判断是否是数字的值
 * @param isStrict 是否采用严格模式
 */
export const isNumberic = (value: any, isStrict?: boolean): boolean => {
  if (isStrict) {
    return !Number.isNaN(value) && Number.isFinite(value)
  }
  const type = typeof value
  return (type === 'number' || type === 'string')
    && !Number.isNaN(value - parseFloat(value))
  return !isNaN(parseFloat(value)) && isFinite(value)
}

/**
 * 判断一个值是否是数字且是否在给定区间内（闭区间）
 * @param value 需要判断是否在给定区间内的值
 * @param min 最小值
 * @param max 最大值
 */
export const isNumbericInRange = (value: any, min: number, max: number): boolean => {
  let isNumber: boolean = isNumberic(value)
  let isMinMaxValid = isNumberic(min) && isNumberic(max) && +max > +min
  if (!isNumber) {
    console.warn('验证的参数不是数字')
    return false
  }
  if (!isMinMaxValid) {
    console.warn('验证区间（最大值或最小值）无效')
    return false
  }
  return +value >= +min && +value <= +max
}

/**
 * 小数保留指定位数
 * @param num
 * @param d 保留的位数
 * @param type 默认false，采用四舍五入（toFixed），为true时则舍去后面的所有值
 */
export const decimal = (num: number, d: number, type?: boolean): number => {
  let r: number
  let t: string = num.toString()
  try {
    r = t.split('.')[1].length
  } catch (e) {
    r = 0
  }
  if (r > d) {
    if (type) {
      return Number(t.slice(0, t.length - (r - d)))
    }
    return Number(num.toFixed(d))
  } else {
    return num
  }
}

/**
 * 加法函数
 * @param num1
 * @param num2
 */
export const add = (num1: number, num2: number) => {
  let r1: number = 0
  let r2: number = 0
  let m: number
  try {
    r1 = num1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = num2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return (num1 * m + num2 * m) / m
}

/**
 * 减法函数
 * @param num1
 * @param num2
 */
export const sub = (num1: number, num2: number): number => {
  let r1: number = 0
  let r2: number = 0
  let m: number
  let n: number
  try {
    r1 = num1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = num2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  n = r1 >= r2 ? r1 : r2
  return Number(((num1 * m - num2 * m) / m).toFixed(n))
}

/**
 * 乘法函数
 * @param num1
 * @param num2
 */
export const mcl = (num1: number, num2: number): number => {
  let m: number = 0
  let s1: string = num1.toString()
  let s2: string = num2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {
    m = 0
  }
  try {
    m += s2.split('.')[1].length
  } catch (e) {
    m = 0
  }
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m)
}

/**
 * 除法函数
 * @param num1
 * @param num2
 */
export const division = (num1: number, num2: number): number => {
  let t1: number = 0
  let t2: number = 0
  let r1: number
  let r2: number
  try {
    t1 = num1.toString().split('.')[1].length
  } catch (e) {
    t1 = 0
  }
  try {
    t2 = num2.toString().split('.')[1].length
  } catch (e) {
    t2 = 0
  }
  r1 = Number(num1.toString().replace('.', ''))
  r2 = Number(num2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}
