import React from "react";
import { BoxProps } from "./BoxProps";
import { Div } from "../../styled/Div/Div";
import { AnimatePresence } from "framer-motion";

export const Box = (props: BoxProps) => {
  //spread props
  const {
    children,
    animationPresence,
    css,
    a,
    b,
    c,
    bb,
    bg,
    bl,
    br,
    bt,
    bx,
    by,
    d,
    dc,
    e,
    h,
    i,
    m,
    maxH,
    maxW,
    mb,
    minH,
    minW,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    r,
    rb,
    rbl,
    rbr,
    rl,
    rr,
    rt,
    rtl,
    rtr,
    s,
    shadow,
    t,
    v,
    w,
  } = props;

  const { onClick, onMouseEnter, onMouseLeave, onScroll } = props;

  return (
    <Div
      animate={a}
      drag={d}
      dragConstraints={dc}
      variants={v}
      transition={t}
      initial={i}
      exit={e}
      css={{
        color: c,
        marginBottom: mb || my || m,
        marginLeft: ml || mx || m,
        marginRight: mr || mx || m,
        marginTop: mt || my || m,
        paddingBottom: pb || py || p,
        paddingLeft: pl || px || p,
        paddingRight: pr || px || p,
        paddingTop: pt || py || p,
        background: bg,
        borderTop: bt || by || b,
        borderRight: br || bx || b,
        borderBottom: bb || by || b,
        borderLeft: bl || bx || b,
        borderTopRightRadius: rtr || rt || rr || r,
        borderTopLeftRadius: rtl || rt || rl || r,
        borderBottomRightRadius: rbr || rb || rr || r,
        borderBottomLeftRadius: rbl || rb || rl || r,
        height: s || h,
        maxHeight: maxH,
        maxWidth: maxW,
        minHeight: minH,
        minWidth: minW,
        width: s || w,
        boxShadow: shadow,
        ...css,
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onScroll={onScroll}
    >
      {animationPresence ? (
        <AnimatePresence>{children}</AnimatePresence>
      ) : (
        <>{children}</>
      )}
    </Div>
  );
};
