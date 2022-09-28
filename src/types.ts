import React,{ReactNode} from "react";

export interface wrapperProp {
    children: ReactNode
}
export type method = "GET" | "POST" | "PUT" | "DELETE" | "_";
export type cat= | "default"
| "no-cache"
| "reload"
| "force-cache"
| "only-if-cached"
| undefined;
export type mode = "no-cors" | "cors" | "same-origin";


export type credentials = "same-origin" | "include" | "omit";
export type contentType = "text/plain";
export type redirect = "manual" | "follow" | "error";
export type referrerPolicy =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

