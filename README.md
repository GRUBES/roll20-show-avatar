# Roll20 Chat Command: `show-avatar`

```
!show-avatar id
```

Displays the given Character's Avatar image in chat.

### Parameters

`id {string}` - The unique identifier of a Character, typically retrieved via the `character_id` property.

### Returns

`void` - The image is displayed in chat; there is no return value.

## Example Usage: Token Action

Add a new Ability Macro to a Character:

  * Name: `ShowAvatar`
  * Macro: `!show-avatar @{character_id}`
  * Check `Show as Token Action` 

1. Place the Character's Token on the VTT
1. Select the Character's Token
1. Click the `ShowAvatar` Token Action

The Avatar image should display in chat for all users.

## Example Usage: Selected Token

1. Select a Token on the VTT
1. Enter Chat Command: `!show-avatar @{selected|character_id}`

The Avatar image should display in chat for all users.
