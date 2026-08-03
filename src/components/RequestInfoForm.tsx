"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryCodes, flagEmoji, popularCountryCodes } from "@/lib/country-codes";

export function RequestInfoForm({
  idPrefix,
  variant = "dark",
  className,
}: {
  idPrefix: string;
  variant?: "dark" | "onGold";
  className?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={cn("py-6", className)}>
        <div
          className={cn(
            "mb-3 flex size-11 items-center justify-center rounded-full",
            variant === "dark" ? "bg-gold/15 text-gold" : "bg-ink/10 text-ink"
          )}
        >
          <CheckCircle2 className="size-6" />
        </div>
        <h3
          className={cn(
            "font-display text-2xl uppercase",
            variant === "dark" ? "text-white" : "text-ink"
          )}
        >
          You&apos;re on the list.
        </h3>
        <p
          className={cn(
            "mt-2 text-sm",
            variant === "dark" ? "text-white/65" : "text-ink/70"
          )}
        >
          We&apos;ll send the full camp guide, pricing and available dates to your
          inbox shortly.
        </p>
      </div>
    );
  }

  const fieldLabelClass =
    variant === "dark"
      ? "text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white/55"
      : "text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink/55";

  const inputClass = cn(
    "w-full rounded-sm px-4 py-3.5 text-sm outline-none transition-colors font-body",
    variant === "dark"
      ? "border border-white/20 bg-white/[0.04] text-white placeholder:text-white/35 focus:border-gold"
      : "border border-ink/20 bg-white/70 text-ink placeholder:text-ink/35 focus:border-ink"
  );

  return (
    <form
      className={cn("space-y-3.5", className)}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="space-y-1.5">
        <Label htmlFor={`${idPrefix}-name`} className={fieldLabelClass}>
          Full name
        </Label>
        <input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          placeholder="Your name"
          required
          className={inputClass}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor={`${idPrefix}-phone`} className={fieldLabelClass}>
          Phone / WhatsApp
        </Label>
        <div className="flex gap-2">
          <Select name="countryCode" defaultValue="US">
            <SelectTrigger
              aria-label="Country code"
              className={cn(
                "w-27 shrink-0 rounded-sm px-3 py-3.5 text-sm font-body",
                variant === "dark"
                  ? "border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.06] focus-visible:border-gold focus-visible:ring-0"
                  : "border-ink/20 bg-white/70 text-ink hover:bg-white/80 focus-visible:border-ink focus-visible:ring-0"
              )}
            >
              <SelectValue>
                {(value: string | null) => {
                  const selected = countryCodes.find((c) => c.iso2 === value);
                  return selected ? `${flagEmoji(selected.iso2)} ${selected.dial}` : "+1";
                }}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="w-72 max-h-80" alignItemWithTrigger={false}>
              <SelectGroup>
                <SelectLabel>Popular</SelectLabel>
                {popularCountryCodes.map((iso2) => {
                  const country = countryCodes.find((c) => c.iso2 === iso2);
                  if (!country) return null;
                  return (
                    <SelectItem key={country.iso2} value={country.iso2}>
                      <span>{flagEmoji(country.iso2)}</span>
                      <span className="flex-1">{country.name}</span>
                      <span className="text-muted-foreground">{country.dial}</span>
                    </SelectItem>
                  );
                })}
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>All countries</SelectLabel>
                {countryCodes.map((country) => (
                  <SelectItem key={country.iso2} value={country.iso2}>
                    <span>{flagEmoji(country.iso2)}</span>
                    <span className="flex-1">{country.name}</span>
                    <span className="text-muted-foreground">{country.dial}</span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            placeholder="555 000 0000"
            required
            className={cn(inputClass, "flex-1 min-w-0")}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor={`${idPrefix}-email`} className={fieldLabelClass}>
          Email
        </Label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          placeholder="you@email.com"
          required
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className={cn(
          "mt-1 w-full rounded-sm py-4 text-sm font-extrabold tracking-[0.05em] uppercase transition-colors cursor-pointer",
          variant === "dark"
            ? "bg-gold text-ink hover:bg-white"
            : "bg-ink text-paper hover:bg-ink/85"
        )}
      >
        Send Me The Details
      </button>
    </form>
  );
}
