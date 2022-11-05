// https://nextjs.org/docs/api-routes/response-helpers
// https://nextjs.org/learn/basics/api-routes/creating-api-routes
// https://nextjs.org/docs/guides/building-forms

export default function handler(req, res) {
  const customerInfo = req.body
  res.status(201).json({
    fname: customerInfo.fname,
    lname: customerInfo.lname,
    email: customerInfo.email,
    dayphone: customerInfo.dayphone,
    eveningphone: customerInfo.eveningphone,
    comments: customerInfo.comments,
    state: customerInfo.state,
    zip: customerInfo.zip,
    city: customerInfo.city,
    address1: customerInfo.address1,
    address2: customerInfo.address2
  })
 }
