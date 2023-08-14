import { Container, Typography } from '@mui/material'
import React from 'react'
import styles from './bragDocument.module.css'
import { SEO } from '../../../src/Components/SEO/SEO'
import { GlobalNav } from '../../../src/Components/GlobalNav/GlobalNav'

const pageTitle = 'Getting the Most Out of a Brag Document'
const description =
  'As little wins stack up, you can add a quick recap of those wins to your brag document to help yourself remember the context and outcomes later. The small habit of keeping an up-to-date brag document can have a huge impact on your career. A brag document is great for:'

export const Callout = ({ type = 'info', children }) => {
  return (
      <div className={`${styles.callout} ${styles[type]}`}>
          {children}
      </div>
  )
}

export const Title = ({ text, subtitleText }) => {
  return (
      <>
          <Typography
              variant="semiHuge"
              sx={{ color: 'primary.main' }}
              component="h1"
          >
              {text}
          </Typography>
          <Typography
              variant="h2"
              sx={{ color: 'primary.main', marginTop: '0 !important', marginBottom: '2rem !important' }}
              component="h2"
          >
              {subtitleText}
          </Typography>
      </>
  )
}

export const BragDocuments = () => {
  return (
      <div className="page-container">
          <SEO pageTitle={pageTitle} description={description} />

          <GlobalNav activeLink={'blog'} />

          <Container maxWidth="lg" className="content-container">
              <Title text={pageTitle} subtitleText="How to stay visible in your current role" />

              <Typography variant="h2" sx={{ color: 'primary.main' }} component="h2">
                  What is a Brag Document?
              </Typography>

              <Typography variant="body1" component="p">
                  Simply put, a <b>brag document</b> is a living document which tracks the highlights of your career. As little wins stack up, you can add a quick recap of those wins to your brag document to help yourself remember the context and outcomes later. The small habit of keeping an up-to-date brag document can have a huge impact on your career.
              </Typography>

              <Typography variant="body1" component="p">
                  A brag document is great for:
              </Typography>

              <ul>
                  <Typography variant="body1" component="li">
                      Capturing the amazing work you’re doing 🌟
                  </Typography>
                  <Typography variant="body1" component="li">
                      Aligning your work to your company’s career ladder 🪜
                  </Typography>
                  <Typography variant="body1" component="li">
                      Making sure your work is visible when your manager starts your performance review 🔍
                  </Typography>
                  <Typography variant="body1" component="li">
                      Giving yourself a starting point for building a fantastic resume 📝
                  </Typography>
                  <Typography variant="body1" component="li">
                      Helping you prep for behavioral interviews 🙌
                  </Typography>
              </ul>

              <Typography variant="h2" sx={{ color: 'primary.main' }} component="h2">
                  Structure of a Brag Document Entry
              </Typography>

              <Typography variant="body1" component="p">
                  Here are some of the key pieces of information you&apos;ll want to include in each entry
              </Typography>

              <ul>
                  <Typography variant="body1" component="li">
                      <b>Context surrounding your action:</b> When did this happen? Why did you take on this task? What are 2-3 facts I should know about this project in order to understand your actions?
                  </Typography>
                  <Typography variant="body1" component="li">
                      <b>Clear explanation of your actions:</b> It should be very clear from this document exactly what *you* did and how that action led to the outcome. “Led the project” is probably too vague. Be careful to avoid using “we”. If your team did this, what part of the team’s effort were <i>you</i> in charge of?
                  </Typography>
                  <Typography variant="body1" component="li">
                      <b>Specific results:</b> What was the outcome of your actions? It should be obvious how your actions led to the result. Be sure to include specific metrics wherever possible.
                  </Typography>
              </ul>

              <Typography variant="body1" component="p">
                  Brag documents are very flexible. Assuming you have the relevant information in each entry, you have a lot of creative freedom to structure entries in a way that makes sense to you. However, It’s important to keep it simple so that you’re more likely to keep it updated. My rule of thumb for brag documents is to keep it simple enough that you can make a new entry in less than one minute.
              </Typography>

              <Typography variant="body1" component="p">
                  I prefer to use the <a href="https://capd.mit.edu/resources/the-star-method-for-behavioral-interviews/" target="_blank" rel="noreferrer">STAR Method</a> to format my recaps because it forces me to include all of the necessary information while giving me a structure to get started. This also has the advantage of giving you a head-start when preparing for interviews, since the STAR Method is now the industry standard for behavioral interviews.
              </Typography>

              <Typography variant="h2" sx={{ color: 'primary.main' }} component="h2">
                  Getting the most out of a Brag Document
              </Typography>

              <Typography variant="h3" component="h3">
                  1. Share it with your manager.
              </Typography>

              <Typography variant={'body1'} component={'p'}>
                  Sharing examples from your brag document with your manager has two key advantages:
              </Typography>

              <ol>
                  <Typography variant={'body1'} component={'li'}>
                      You increase the visibility into your work. Your manager is likely pretty busy and it’s impossible to expect them to remember (or even hear about) all of your accomplishments. The more context they get from you, the more likely it is that they can be a good advocate for you.
                  </Typography>
                  <Typography variant={'body1'} component={'li'}>
                      You increase the amount of time your manager can spend crafting focused feedback. Since your manager isn’t starting from a blank page, they can spend more time reflecting on your work than on remembering it.
                  </Typography>
              </ol>

              <Typography variant={'body1'} component={'p'}>
                  This may be a bit controversial but, if you’re comfortable with it, I highly recommend creating a role-specific copy of your brag document and sharing the entire document with your manager directly. This makes the process of sharing your accomplishments a <i>collaborative</i> effort and ensures that they have the context they need <i>when they need it</i> Conversations about promotions and compensation adjustments will likely happen when you’re not in the room, and equipping your manager with the context they need will help them be a good advocate for you.
              </Typography>
              <Typography variant={'body1'} component={'p'}>
                  That said, not everyone will want to share their brag document directly. If you’re uncomfortable with that level of visibility (or if your manager has lost your trust), that’s completely understandable. In that case, try sharing your brag document <i>indirectly</i> by occasionally sharing key updates from your brag document in a 1:1 or through direct messages. That way, you can still ensure that your manager knows about your accomplishments.
              </Typography>

              <Typography variant={'h3'} component={'h3'}>
                  2. Don’t forget the little things.
              </Typography>

              <Typography variant={'body1'} component={'p'}>
                  Not every accomplishment involves launching a new product. Many important skills for senior-level roles (such as influencing others, removing roadblocks, or mentoring teammates) happen behind-the-scenes and are therefore more difficult to quantify during a performance review. Including specific, high-impact examples of your soft-skills in your brag document will make it much easier to illustrate these skills later.
              </Typography>

              <Typography variant={'h3'} component={'h3'}>
                  3. Connect it to your career ladder.
              </Typography>

              <Typography variant={'body1'} component={'p'}>
                  Your career ladder is your company’s wishlist of employee traits. By linking your accomplishments to specific areas of your career ladder, you are effectively saying “You told me you want X. I gave you X this quarter, and here’s when/how I did it.”
              </Typography>

              <Callout>
                  <Typography variant={'body1'} component={'p'}>
                      📈 Looking for a promotion? Try linking your accomplishments to the career ladder <i>one level above your current role</i>. If you can prove that you’ve been performing at the next level for past 3-6 months, you will make the case for your promotion even stronger.
                  </Typography>
              </Callout>

              <Typography variant={'body1'} component={'p'}>
                  If your company doesn&apos;t have a career ladder that’s visible to employees, try connecting your accomplishments to their <i>core values</i> instead. While core values aren’t as role-specific, they do reflect your company’s ideal employee. They provide a way to link your accomplishment to something the company values.
              </Typography>

              <Typography variant="h2" sx={{ color: 'primary.main' }} component="h2">
                  Free Template to Get Started
              </Typography>

              <Typography variant={'body1'} component={'p'}>
                  To make it easier to get started, I’ve created a free template which is now public in the <a href={'https://www.notion.so/templates/brag-document-template'}>Notion template gallery</a>. The template comes with five different views, a best practices guide, and a template to get you started.
              </Typography>
          </Container>
      </div>
  )
}

export default BragDocuments
