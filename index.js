function justInvoke(argumentFn) {
  return argumentFn()
}

function setThisWithCall(argFn, argObj, args) {
  return argFn.call(argObj, args)
}

function setThisWithApply (argFn, argObj, argsArray) {
  return argFn.apply(argObj, argsArray)
}

function returnNewFunctionOf (argFn, argument) {
  const copy = argFn.bind(argument)
  return copy
}
