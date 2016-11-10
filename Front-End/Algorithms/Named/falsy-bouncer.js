function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(isFalsy);
}

function isFalsy(n) {
  if(n) 
    return true;
}

bouncer([7, "ate", "", false, 9]);