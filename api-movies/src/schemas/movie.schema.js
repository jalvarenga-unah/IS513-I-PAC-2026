import * as z from 'zod'


const movieSchema = z.object({
    "title": z.string().min(2).max(100),
    "director": z.array(z.int().positive(), "naaaa").min(1),
    "posterUrl": z.url().nullable(),
    "genre": z.array(z.int().positive()).min(1).nullable(),
})

export const validateMovieSchema = (movie) => {
    return movieSchema.safeParse(movie)
}