export default defineEventHandler(async (event) => {
    return { get: '/api/example.get.ts' }
})