function justInvoke(f) {
  return f();
};

function setThisWithCall(f, tv, arg) {
  return f.call(tv, arg);
};

function setThisWithApply(f, tv, arg) {
  return f.apply(tv, arg);
}

function returnNewFunctionOf(f, tv) {
  return f.bind(tv);
}
