module.exports.messageBus = {};
module.exports.messageBus.topics = [];
module.exports.messageBus.names = [];

class Topic {
  constructor(name) {
    this.name = name;
    this.subs = [];
    this.messages =[];
  }
  publishMessage(msg) {
    
  }
  pushMessage() {

  }
  addSub() {

  }
}

module.exports.messageBus.contains = function(topic) {
  return messageBus.names.includes(topic);
}

module.exports.messageBus.susbscribe = function(topic) {
  
};

module.exports.messageBus.publish = function(topic, payload) {
  if (!messageBus.contains(topic)) {
    const newTopic = new Topic(topic);
    messageBus.topics.push(newTopic);
    messageBus.names.push(topic);
  }
};

module.exports.Topic;