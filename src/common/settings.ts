import { mergeInitData } from "../util/util.js";
import { RemoteSettings } from "../util/webext/settings.js";

export const DEFAULT_FILENAME_TEMPLATE = '*name*'

export class NetworkOptions {
	maxThreads = 4
	minChunkSize = 1024 // KiB
	maxRetries: number | '' = 5
}
export const NETWORK_OPTIONS_KEYS =
	Object.keys(new NetworkOptions) as (keyof NetworkOptions)[]

export const logLevels = ['info', 'warning', 'error'] as const
export type LogLevel = (typeof logLevels)[number]

export type StorageAPIOption = 'MutableFile' | 'SegmentedFile'

export class Settings extends mergeInitData(Object, { ...new NetworkOptions() }) {
	version = 0

	saveFileTo = 'systemDefault' as 'systemDefault' | 'downloadFolder' | 'alwaysAsk'
	newTaskAtTop = true
	removeCompletedTasksOnStart = false
	removeFailedTasksOnStart = false
	cascadeBuiltinTask = true
	keepCompletedTasksContent = false
	simultaneousTasks: number | '' = ''
	monitorDownload = false
	monitorDownloadType = 'askForOptions' as 'downloadDirectly' | 'askForOptions'
	monitorDownloadMinSize = 1024 // KiB
	autoCloseBlankTab = true
	monitorLinksWithoutRange = false
	monitorPDFFiles = false
	monitorAudioFiles = false
	monitorVideoFiles = false
	playSoundOnAllCompleted = false
	showNotificationOnAllCompleted = false
	inhibitSleep = false

	theme = '' as '' | 'dark'
	iconColor = 'default'
	iconColorCode = '#000000'
	iconColorAlpha = 100
	contextMenuIconColor = '' as '' | 'white'
	badgeType = 'number' as 'none' | 'number'
	hideBadgeZero = false
	iconClickAction = 'default' as 'default' | 'tab' | 'window' | 'sidebar'
	showTooltip = false
	windowPosition = 'parentCenter' as 'default' | 'parentCenter' | 'remember'
	windowSize = 'default' as 'default' | 'remember'
	showAddPaused = false
	shortenTabTitle = ''
	filenameSearchItems = ''
	addContextMenuToLink = true
	addContextMenuToLinkType = 'downloadDirectly' as 'downloadDirectly' | 'askForOptions'
	showOptionsInDedicatedTab = false

	rememberLastNetworkOptions = false
	dynamicMinChunkSize = false
	connectionTimeout: number | '' = '' // s
	transferTimeout: number | '' = '' // s
	segmentsIntervalInit = 2 // s
	segmentsIntervalMax = 60 // s
	segmentsIntervalGrowFactor = 2.00
	segmentsIntervalGrowPerFiles = 1000

	legacyFilenameEncoding = ''
	legacyFilenameDetectUTF8 = true
	legacyFilenameDetectURLEncoded = true
	legacyFilenameDetectNonStandardURLEncoded = false
	useSiteHandlers = false
	connectionAPI: '' | 'Streams' | 'StreamFilter' = ''
	storageAPI: StorageAPIOption | '' = ''
	cacheMode: '' | RequestCache = ''
	monitorDownloadShowBuiltinActions = false
	openWindowIncognito = false
	dialogAlwaysOnTop = false
	panelWindowAlwaysOnTop = false
	logLevel = 'warning' as LogLevel

	removeAfterImport = true

	// taskOrder: number[] = [] // unused

	filenameTemplate = DEFAULT_FILENAME_TEMPLATE
	enableTaskSelection = true
	autoImportExtList: { id: string, name: string }[] = []
	firefox75WarningDismissed = false
}

export const remoteSettings = new RemoteSettings(new Settings)