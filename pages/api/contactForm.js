// https://nextjs.org/docs/api-routes/response-helpers
// https://nextjs.org/learn/basics/api-routes/creating-api-routes
// https://nextjs.org/docs/guides/building-forms

export default function handler(req, res) {
  const comment = req.body.customerComment
  res.status(201).json({data: comment})
 }