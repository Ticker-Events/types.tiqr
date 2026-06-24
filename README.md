# @types/tiqr

TypeScript type definitions for [TiQr Store](https://github.com/tiqr-labs/tiqr.store).

## Install

```bash
npm install @types/tiqr
```

## Usage

```typescript
import type { TUser, TStore, TOrder, TProduct } from "@types/tiqr";

// Domain-only imports (no UI peer deps required)
import type { TUser, TOrder } from "@types/tiqr/domain";

// UI component prop types
import type { TToastProps } from "@types/tiqr/ui";
```

## Subpath exports

| Path | Contents |
|------|----------|
| `@types/tiqr` | All types |
| `@types/tiqr/domain` | API/domain models |
| `@types/tiqr/ui` | Component and hook prop types |

## Peer dependencies

- `react` — required for UI types using `ReactNode`, refs, etc.
- `firebase` — optional, only for auth context types
