import z from "zod"
const stringzodschema = z.string()
type stringZodType = z.infer<typeof stringzodschema>

