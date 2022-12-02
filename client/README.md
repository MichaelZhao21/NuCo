# NuCo

Frontend for the NuCo nutrition app.

## Setup

Add `config.json` to the root `client` folder. Run `yarn install` then start with `yarn dev`.

User

* U: johndoe
* P: password

Coach

* U: coachtyler
* P: password

Admin

* U: admin
* P: password

## Database Format

### Collection `users`

```json
{
    "username": "string",
    "password": "string",
    "role": "[user, coach, admin]"
}
```
