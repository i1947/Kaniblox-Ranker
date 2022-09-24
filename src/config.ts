import { BotConfig } from './structures/types'; 

export const config: BotConfig = {
    groupId: 4499301,
    slashCommands: true,
    legacyCommands: {
        enabled: true,
        prefixes: ['r!'],
    },
    permissions: {
        all: ['1021523243150102592'],
        ranking: ['1021523243150102592'],
        users: ['1021523243150102592'],
        shout: ['1021523243150102592'],
        join: ['1021523243150102592'],
        signal: ['1021523243150102592'],
        admin: ['1021523243150102592'],
    },
    logChannels: {
        actions: '1019324257764917331',
        shout: '1019324257764917331',
    },
    database: {
        enabled: true,
        type: 'mongodb',
    },
    api: false,
    maximumRank: 255,
    verificationChecks: true,
    firedRank: 1,
    suspendedRank: 1,
    recordManualActions: true,
    memberCount: {
        enabled: false,
        channelId: '',
        milestone: 100,
        onlyMilestones: false,
    },
    xpSystem: {
        enabled: false,
        autoRankup: false,
        roles: [
            /* Example:
            {
                rank: 3,
                xp: 30,
            },
            */
        ],
    },
    antiAbuse: {
        enabled: false,
        clearDuration: 1 * 60,
        threshold: 5,
        demotionRank: 1,
        bypassRoleId: '',
    },
    activity: {
        enabled: true,
        type: 'WATCHING',
        value: 'r! for more help.',
    },
    status: 'online',
    deleteWallURLs: false,
}
const mySecret = process.env['DISCORD_TOKEN']