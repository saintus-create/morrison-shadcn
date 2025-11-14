"use client"
import * as React from "react"
import { IconMinus, IconPlus } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
Field,
FieldContent,
FieldDescription,
FieldGroup,
FieldLabel,
FieldLegend,
FieldSeparator,
FieldSet,
FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
RadioGroup,
RadioGroupItem,
} from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

export function AppearanceSettings() {
const [gpuCount, setGpuCount] = React.useState(8)
const handleGpuAdjustment = React.useCallback((adjustment: number) => {
setGpuCount((prevCount) =>
Math.max(1, Math.min(99, prevCount + adjustment))
)
}, [])

const handleGpuInputChange = React.useCallback(
(e: React.ChangeEvent<HTMLInputElement>) => {
const value = parseInt(e.target.value, 10)
if (!isNaN(value) && value >= 1 && value <= 99) {
setGpuCount(value)
}
},
[]
)

return (
<FieldSet>
<FieldGroup>
<Field>
<FieldTitle>Compute Environment</FieldTitle>
<FieldDescription>
Select the compute environment for your cluster.
</FieldDescription>
<RadioGroup defaultValue="kubernetes" className="grid w-full gap-6">
<Field>
<RadioGroupItem value="kubernetes" id="kubernetes" />
<FieldLabel htmlFor="kubernetes">
Kubernetes
<FieldDescription>
Run GPU workloads on a K8s configured cluster. This is the
default.
</FieldDescription>
</FieldLabel>
</Field>
<Field>
<RadioGroupItem
value="virtual-machine"
id="virtual-machine"
disabled
/>
<FieldLabel htmlFor="virtual-machine">
Virtual Machine
<FieldDescription>
Access a VM configured cluster to run workloads. (Coming
soon)
</FieldDescription>
</FieldLabel>
</Field>
</RadioGroup>
</Field>
<FieldSeparator />
<Field>
<FieldLabel>Number of GPUs</FieldLabel>
<FieldDescription>You can add more later.</FieldDescription>
<ButtonGroup className="w-full">
<Button
variant="outline"
size="icon"
onClick={() => handleGpuAdjustment(-1)}
disabled={gpuCount <= 1}
>
<IconMinus className="h-4 w-4" />
</Button>
<Input
className="text-center"
min={1}
max={99}
type="number"
value={gpuCount}
onChange={handleGpuInputChange}
/>
<Button
variant="outline"
size="icon"
onClick={() => handleGpuAdjustment(1)}
disabled={gpuCount >= 99}
>
<IconPlus className="h-4 w-4" />
</Button>
</ButtonGroup>
</Field>
<FieldSeparator />
<Field>
<div className="flex items-center justify-between">
<FieldLabel>Wallpaper Tinting</FieldLabel>
<Switch />
</div>
<FieldDescription>
Allow the wallpaper to be tinted.
</FieldDescription>
</Field>
</FieldGroup>
</FieldSet>
)
}