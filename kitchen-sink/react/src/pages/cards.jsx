import React from 'react';
import { Navbar, Page, Block, BlockTitle, Card, CardHeader, CardContent, CardFooter, List, ListItem, Link } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Cards" backLink="Back" />

    <Block>
      <p>Cards are a great way to contain and organize your information, especially when combined with List Views. Cards can contain unique related data, like for example photos, text or links about a particular subject. Cards are typically an entry point to more complex and detailed information.</p>
    </Block>
    <BlockTitle>Simple Cards</BlockTitle>
    <Card
      content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
    ></Card>
    <Card
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></Card>
    <Card
      content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
    ></Card>

    <BlockTitle>Outline Cards</BlockTitle>
    <Card
      outline
      content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
    ></Card>
    <Card
      outline
      title="Card header"
      content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
      footer="Card footer"
    ></Card>
    <Card
      outline
      content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
    ></Card>

    <BlockTitle>Styled Cards</BlockTitle>
    <Card className="demo-CardHeader-pic">
      <CardHeader
        className="no-border"
        valign="bottom"
        style={{ backgroundImage: 'url(http://lorempixel.com/1000/600/nature/3/)' }}
      >Journey To Mountains</CardHeader>
      <CardContent>
        <p className="date">Posted on January 21, 2015</p>
        <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
      </CardContent>
      <CardFooter>
        <Link>Like</Link>
        <Link>Read more</Link>
      </CardFooter>
    </Card>
    <Card className="demo-CardHeader-pic">
      <CardHeader
        className="no-border"
        valign="bottom"
        style={{ backgroundImage: 'url(http://lorempixel.com/1000/600/people/6/)' }}
      >Journey To Mountains</CardHeader>
      <CardContent>
        <p className="date">Posted on January 21, 2015</p>
        <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
      </CardContent>
      <CardFooter>
        <Link>Like</Link>
        <Link>Read more</Link>
      </CardFooter>
    </Card>

    <BlockTitle>Facebook Cards</BlockTitle>
    <Card className="demo-facebook-card">
      <CardHeader className="no-border">
        <div className="demo-facebook-avatar"><img src="http://lorempixel.com/68/68/people/1/" width="34" height="34"/></div>
        <div className="demo-facebook-name">John Doe</div>
        <div className="demo-facebook-date">Monday at 3:47 PM</div>
      </CardHeader>
      <CardContent padding={false}>
        <img src="http://lorempixel.com/1000/700/nature/8/" width="100%"/>
      </CardContent>
      <CardFooter className="no-border">
        <Link>Like</Link>
        <Link>Comment</Link>
        <Link>Share</Link>
      </CardFooter>
    </Card>
    <Card className="demo-facebook-card">
      <CardHeader className="no-border">
        <div className="demo-facebook-avatar"><img src="http://lorempixel.com/68/68/people/1/" width="34" height="34"/></div>
        <div className="demo-facebook-name">John Doe</div>
        <div className="demo-facebook-date">Monday at 2:15 PM</div>
      </CardHeader>
      <CardContent>
        <p>What a nice photo i took yesterday!</p><img src="http://lorempixel.com/1000/700/nature/8/" width="100%"/>
        <p className="likes">Likes: 112 &nbsp;&nbsp; Comments: 43</p>
      </CardContent>
      <CardFooter className="no-border">
        <Link>Like</Link>
        <Link>Comment</Link>
        <Link>Share</Link>
      </CardFooter>
    </Card>

    <BlockTitle>Cards With List View</BlockTitle>
    <Card>
      <CardContent padding={false}>
        <List>
          <ListItem link="#">Link 1</ListItem>
          <ListItem link="#">Link 2</ListItem>
          <ListItem link="#">Link 3</ListItem>
          <ListItem link="#">Link 4</ListItem>
          <ListItem link="#">Link 5</ListItem>
        </List>
      </CardContent>
    </Card>
    <Card title="New Reelases">
      <CardContent padding={false}>
        <List medial-list>
          <ListItem
            title="Yellow Submarine"
            subtitle="Beatles"
          >
            <img slot="media" src="http://lorempixel.com/88/88/fashion/4" width="44"/>
          </ListItem>
          <ListItem
            title="Don't Stop Me Now"
            subtitle="Queen"
          >
            <img slot="media" src="http://lorempixel.com/88/88/fashion/5" width="44"/>
          </ListItem>
          <ListItem
            title="Billie Jean"
            subtitle="Michael Jackson"
          >
            <img slot="media" src="http://lorempixel.com/88/88/fashion/6" width="44"/>
          </ListItem>
        </List>
      </CardContent>
      <CardFooter>
        <span>January 20, 2015</span>
        <span>5 comments</span>
      </CardFooter>
    </Card>
  </Page>
);
