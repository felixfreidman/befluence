import React from 'react'
import classes from '../../../index.module.scss'
import TableCell from './TableCell/TableCell';

export default function TableRow(props) {

    const cls = [classes.TableRow__value];
    const clsLink = [classes.TableRow__link]
    const clsSex = [classes.TableRow__value];
    switch (props.sex) {
        case 'M':
            clsSex.push(classes.TableRow__valueMale);
            break;
        case 'F':
            clsSex.push(classes.TableRow__valueFemale);
            break;
        default:
            clsSex.push(classes.TableRow__valueMale);
            break;
    }
    const clsPlatform = [classes.TableRow__value];
    switch (props.platform) {
        case "Twitch":
            clsPlatform.push(classes.TableRow__valueTwitch)
            break;
        case "Kick":
            clsPlatform.push(classes.TableRow__valueKick)
            break;
        case "Instagram":
            clsPlatform.push(classes.TableRow__valueInstagram)
            break;
        case "YouTube":
            clsPlatform.push(classes.TableRow__valueYouTube)
            break;
        case "TikTok":
            clsPlatform.push(classes.TableRow__valueTikTok)
            break;
        case "Telegram":
            clsPlatform.push(classes.TableRow__valueTelegram)
            break;
        default:
            clsPlatform.push('')
            break;
    }

    return (
        <div className={classes.TableRow}>
            <TableCell class={cls.join(' ')} value={props.name} />
            <TableCell class={cls.join(' ')} value={props.category} />
            <TableCell class={cls.join(' ')} value={props.location} />
            <TableCell class={clsPlatform.join(' ')} value={props.platform} />
            <TableCell class={cls.join(' ')} value={props.followers} />
            <TableCell class={cls.join(' ')} value={props.online} />
            <TableCell class={cls.join(' ')} value={props.price} />
            <TableCell class={clsLink.join(' ')} value={props.link} isLink={true} />
            <TableCell class={cls.join(' ')} value={props.isBet} />
            <TableCell class={cls.join(' ')} value={props.date} />
        </div >
    )
}
