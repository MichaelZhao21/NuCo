# NuCo

Frontend for the NuCo nutrition app.

## Setup

Add `config.json` to the root `client` folder. Run `yarn install` then start with `yarn dev`.

Default username/password:

U: johndoe
P: password

## Database Format

### Collection `users`

```json
{
    "username": "string",
    "password": "string",
    "role": "[user, coach, admin]"
}
```
