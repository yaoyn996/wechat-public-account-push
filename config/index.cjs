/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx12cbe5848fd739a3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '00a7bcbd2ec63c5a156ba082deac90b3',

  PROVINCE: '浙江',
  CITY: '温岭',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小姚',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2UvJ6AWvV2MQph2fL8-tS1cGu88',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'nC6RyfnD83WAx_TRp6oPTyCCtQHYKU64vYrdLPdyD70',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-09',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1997', date: '01-09',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-05-14' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

