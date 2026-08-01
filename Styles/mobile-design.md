# Mobile App Design Rules

## Objective

Design mobile applications that feel native, polished, intuitive, and production-ready.

Every screen should feel like it belongs on the App Store or Google Play, not like a responsive website squeezed into a phone.

Prioritize:

* Simplicity
* Readability
* Native interactions
* Accessibility
* Performance
* Consistency
* Clear visual hierarchy

---

# Design Philosophy

Design for thumbs.

Design for movement.

Design for short attention spans.

Every interaction should require the least amount of effort possible.

Users should never stop to think about how to use the interface.

---

# Platform First

Always understand the target platform.

If iOS:

Respect Apple's Human Interface Guidelines.

If Android:

Respect Material Design 3.

If cross-platform:

Blend both while maintaining a consistent brand language.

Never force Android patterns into iOS.

Never force iOS patterns into Android.

---

# Screen Sizes

Design Mobile First.

Primary Frame

390 × 844

Secondary

375 × 812

Large Android

412 × 915

Tablet

768+

Never start from desktop.

---

# Grid

Use an 8pt spacing system.

Common spacing

4

8

12

16

20

24

32

40

48

64

Maintain consistent vertical rhythm.

---

# Safe Areas

Always respect:

Status Bar

Dynamic Island

Notch

Navigation Bar

Home Indicator

Never place critical actions near unsafe edges.

---

# Navigation

Choose navigation intentionally.

Bottom Navigation

3–5 primary destinations.

Tab Bar

Frequently switched sections.

Stack Navigation

Sequential flows.

Modal

Temporary actions.

Sheet

Supporting content.

Never mix navigation patterns without purpose.

---

# Typography

Typography follows native platform behavior.

Use Dynamic Type on iOS.

Use Material 3 typography on Android.

Support accessibility scaling.

Never hardcode font sizes.

Recommended custom fonts:

Satoshi

Plus Jakarta Sans

General Sans

Use only one font family per application.

---

# Typography Hierarchy

Hero

40

Title 1

28

Title 2

22

Title 3

18

Headline

17

Body Large

17

Body Medium

15

Body Small

13

Caption

12

Label

11

Never make body text smaller than 13 unless absolutely necessary.

---

# Text Rules

Maximum paragraph width:

60–70 characters.

Never center long paragraphs.

Use sentence case.

Avoid full uppercase except for tiny labels.

Keep line heights generous.

---

# Color

Limit primary colors.

One brand color.

One success color.

One warning color.

One destructive color.

One neutral palette.

Avoid excessive gradients.

Use elevation before adding shadows.

---

# Components

Buttons

Minimum height

48

Input fields

Minimum height

48

Touch targets

Minimum

48 × 48

Cards

16–24 radius

Dialogs

Simple

Focused

Minimal actions

---

# Icons

Use one icon family.

24px default.

20px for dense layouts.

32px+

Hero illustrations only.

Never mix icon styles.

---

# Forms

Reduce typing whenever possible.

Prefer:

Pickers

Selectors

Auto-complete

Camera

Biometrics

Scan

Location

Split long forms into multiple steps.

---

# Content

One primary action per screen.

One primary message per section.

Avoid information overload.

Whitespace improves comprehension.

---

# Motion

Motion should communicate.

Use:

Fade

Slide

Scale

Shared Element

Container Transform

Keep transitions between

200–400ms.

Avoid flashy animations.

---

# Gestures

Support:

Swipe

Pull to Refresh

Drag

Long Press

Pinch

Only when users naturally expect them.

Never hide essential functionality behind gestures alone.

---

# Empty States

Every empty state should explain:

Why nothing exists.

What users should do next.

How to fix it.

Never leave blank screens.

---

# Error States

Explain:

What happened.

Why.

How to recover.

Never blame users.

---

# Loading States

Use:

Skeleton loaders

Progress indicators

Optimistic updates

Avoid spinners whenever possible.

---

# Accessibility

Support Dynamic Type.

Support Material font scaling.

Support screen readers.

Minimum touch target

48x48

Contrast ratio

4.5:1 minimum.

Never communicate information using color alone.

Support reduced motion.

---

# Performance

Design with implementation in mind.

Avoid:

Heavy blurs

Massive shadows

Overlapping gradients

Hundreds of auto-layout layers

Complex nested components

Every screen should feel responsive.

---

# Design System

Everything becomes reusable.

Typography

Colors

Spacing

Radius

Icons

Buttons

Inputs

Cards

Badges

Avatars

Chips

Navigation

Dialogs

Sheets

Never create duplicate components.

---

# Figma Rules

Use Auto Layout.

Use Variables.

Use Design Tokens.

Use Component Properties.

Use Variants.

Name layers clearly.

Never detach components unless absolutely necessary.

---

# Cross Platform Tokens

Use semantic design tokens.

Examples:

--type-hero

--type-title-1

--type-title-2

--type-headline

--type-body-lg

--type-body-md

--type-body-sm

--type-caption

--type-label

Map tokens to native iOS and Android typography instead of hardcoded values.

---

# Design Review Checklist

Before finishing every screen ask:

Is this native?

Can this be simpler?

Can a user complete the task with one hand?

Is hierarchy immediately obvious?

Is the primary action clear?

Does accessibility still work at 200% text size?

Would this pass App Store review?

Would a senior product designer approve this?

If any answer is "no," iterate before shipping.

---

# Things to Avoid

Do not design mobile apps like websites.

Do not overuse glassmorphism.

Do not place more than one primary CTA on a screen.

Do not use tiny text.

Do not ignore safe areas.

Do not ignore accessibility.

Do not invent new navigation patterns.

Do not rely on color alone.

Do not sacrifice usability for aesthetics.

Great mobile products feel effortless.

Users should focus on achieving their goal—not on figuring out the interface.
