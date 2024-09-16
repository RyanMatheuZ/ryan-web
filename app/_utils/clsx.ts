 function clsx(...args: (string | undefined)[]) {
  return args.filter(Boolean).join(" ");
}

export default clsx