export const Action = {
    Left: "Left",
    Right: "Right",
    Rotate: "Rotate",
    SoftDrop: "SoftDrop",
    HardDrop: "HardDrop",
    Pause: "Pause",
    Quit: "Quit",
    CounterRotate: "CounterRotate",
    Hold: "Hold",
}

export const Key = {
    ArrowUp: Action.Rotate,
    ArrowDown: Action.SoftDrop,
    ArrowLeft: Action.Left,
    ArrowRight: Action.Right,
    KeyQ: Action.Quit,
    KeyP: Action.Pause,
    Space: Action.HardDrop,
    KeyZ: Action.CounterRotate,
    KeyX: Action.Rotate,
    KeyC: Action.Hold,
};

export const actionIsDrop = (action) => 
    [Action.SoftDrop, Action.HardDrop].includes(action);
export const actionForKey = (KeyCode) => Key[KeyCode]