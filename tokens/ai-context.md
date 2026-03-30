Design System: JIVI

Primary Color: Orange (#F27521)
Secondary Color: Blue (#1F80FA)

Typography:
- Font: Noto Sans
- Clean, modern, high readability

Button Rules:
- Primary → main CTA only
- Secondary → supporting actions
- Tertiary → text actions

Spacing:
- 8px grid system

Style:
- Clean, minimal (Airbnb-inspired)
- Soft rounded corners
- Light shadows only

Avoid:
- Multiple primary CTAs
- Mixing orange + blue on same button

Input System Rules:
- Use text field for short input, text area for long input
- Always show label above input
- Use primary border on focus
- Show error in red with message
- Sizes: Large (onboarding), Medium (forms), Small (filters)

Chip System Rules:
- Selection → interactive (filters, toggles)
- Tag → informational (non-clickable)
- Keep labels short (1–2 words)
- Use for quick decisions and categorization

Badge System Rules:
- Use for status and feedback, not actions
- Variants: Light (default), Outline (minimal), Dark (emphasis), NoBG (inline)
- States: Success, Warning, Error, Inactive, Primary
- Prefer Light variant for most UI

Radio Button Rules:
- Single selection only (mutually exclusive)
- Always part of a group
- Label required, description optional
- Use for single-choice decisions (vs checkboxes for multi-select)

Checkbox Rules:
- Multiple selections allowed
- Independent toggles
- Label required, description optional
- Use for multi-select (vs radio for single select)

List System Rules:
- Primary composition layer for all components
- Types: Text, Icon, Image, Status, Radio, Checkbox, Action
- Structure: Title (req), Description (opt), Left/Right slot (opt), Meta (opt)
- Use consistent spacing and scannable layouts

Alert System Rules:
- Types: Small (inline), Large (page-level)
- States: Info, Success, Warning, Error
- Dynamic Toggles: Icon (on/off), CTA (on/off)
- Always include icon for clarity unless explicitly disabled
- Use CTA only when action is required

Banner System Rules:
- Types: ImageLeft (intro), ImageRight (nudge), ImageCenter (hero)
- Use for high-impact messaging and growth
- Always include clear CTA

Permission UX Rules:
- Explain WHY access is needed (benefit-driven)
- Use friendly, non-technical language
- Show fallback if denied

Icon System Rules:
- Principles: Support text, consistent size, balanced weight
- Usage: Buttons (md), Inputs (sm), Lists (md), Banners (lg), Permissions (xl)
- Categories: Health (domain), Actions (system), Status (semantic)
- Do not replace labels with icons alone

Card System Rules:
- Types: Action, Doctor, HealthMetric, Status, Testimonial, Complex
- Hierarchy: Title > Description > Meta
- Use scannable layouts and badges for status

Text System Rules:
- Hierarchy: Heading (lg/md/sm), Body (lg/md/sm), Caption
- Patterns: Left, Center, WithCTA, ProductSection
- Keep content concise and maintain consistent hierarchy

Header System Rules:
- Structure: Left (nav), Center (title/status), Right (actions)
- Keep minimal, avoid overcrowding
- Use consistent icon sizes and show status only when relevant

Bottom Bar Rules:
- Purpose: Drive final action (conversion)
- Types: Row (stacked), Column (side-by-side), Price (checkout)
- Guidelines: 1 clear primary CTA, max 2 actions, sticky positioning, thumb-friendly padding
