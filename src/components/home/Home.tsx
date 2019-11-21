import React from "react";
import './Home.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export class Home extends React.Component {
    listDataFromServer = [
        {
            title: 'Avengers Endgame',
            image: 'https://cnet3.cbsistatic.com/img/fcD6VeAd186qOIQzQayGOIV4PqU=/2019/03/14/c12c9e9d-e470-4020-a699-5c4be5509321/avengers-endgame-poster-og-social-crop.jpg',
            description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face..."
        },
        {
            title: 'Toy Story 4',
            image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/C3D3/production/_107513105_toy-story-4_disney.jpg',
            description: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.'
        },
        {
            title: 'Star Wars: The Rise of Skywalker',
            image: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/5d616e1681865a0001451d84/1566668680023/lucasfilm-releases-a-cool-new-poster-for-star-wars-the-rise-of-skywalker-social.jpg?format=1500w',
            description: 'The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.'
        }
    ]
    render() {
        return (
            this.listDataFromServer.map((listData, index) => 
                <Card key={index}>
                    <CardActionArea>
                        <CardMedia
                            image={listData.image}
                            title={listData.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {listData.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {listData.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )
        )
    }
}